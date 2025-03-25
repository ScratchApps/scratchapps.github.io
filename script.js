async function triggerGitHubAction() {
    try {
        const response = await fetch("https://api.github.com/repos/ScratchApps/scratchapps.github.io/actions/workflows/webhook.yml/dispatches", {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ref: "main" }) // Triggers the GitHub Action
        });

        if (response.ok) {
            console.log("GitHub Action triggered successfully!");
        } else {
            console.error("Failed to trigger GitHub Action:", await response.text());
        }
    } catch (error) {
        console.error("Error triggering GitHub Action:", error);
    }
}

// Trigger GitHub Actions on page load
triggerGitHubAction();
