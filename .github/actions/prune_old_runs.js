// Prune old GH action runs
// Source: https://github.community/t/delete-old-workflow-results/16152/44
// Setup: via GH actions

const days_to_expiration = 30;
const ms_in_day = 86400000;
const now = Date.now();
const pages = 5;

// list of action.yaml file names the runs of which should be deleted
const workflows = [
    'action.yml',
    'caller-action.yaml',
    'workflow_run_pruner.yml'
]

let runs_to_delete = [];

for (const workflow of workflows) {
    for (let page = 0; page < pages; page += 1) {
        let response = await github.actions.listWorkflowRuns({
            owner: context.repo.owner,
            page: page,
            per_page: 100,
            repo: context.repo.repo,
            workflow_id: workflow
        });

        if (response.data.workflow_runs.length > 0) {
            for (const run of response.data.workflow_runs) {
                if (now - Date.parse(run.created_at) > ms_in_day * days_to_expiration) {
                    runs_to_delete.push([run.id, run.name]);
                }
            }
        }
    }
}

for (const run of runs_to_delete) {
    console.log(`Run id ${run[0]} of '${run[1]}' is older than ${days_to_expiration} days. Deleting...`);
    try {
        await github.actions.deleteWorkflowRun({
            owner: context.repo.owner,
            repo: context.repo.repo,
            run_id: run[0]
        });
    } catch (error) {
        // ignore errors
    }
}
