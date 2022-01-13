// prune cancelled and skipped GH action runs in JS
// Source: https://github.community/t/delete-old-workflow-results/16152/44
// Setup: via GH actions

const { Octokit } = require("@octokit/action");
const octokit = new Octokit();

const cancelled = octokit.actions.listWorkflowRunsForRepo({
    owner: context.repo.owner,
    per_page: 100,
    repo: context.repo.repo,
    status: 'cancelled',
});

const skipped = octokit.actions.listWorkflowRunsForRepo({
    owner: context.repo.owner,
    per_page: 100,
    repo: context.repo.repo,
    status: 'skipped',
});

for (const response of [cancelled, skipped]) {
    for (const run of response.data.workflow_runs) {
        console.log(`Run id ${run.id} of '${run.name}' is a cancelled/skipped run. Deleting...`);
        octokit.actions.deleteWorkflowRun({
            owner: context.repo.owner,
            repo: context.repo.repo,
            run_id: run.id
        });
    }
}
