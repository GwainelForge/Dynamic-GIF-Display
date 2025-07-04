Twitch.ext.onAuthorized(() => {
    Twitch.ext.configuration.onChanged(() => {
        if (Twitch.ext.configuration.broadcaster) {
            const gifUrl = JSON.parse(Twitch.ext.configuration.broadcaster.content).gifUrl;
            if (gifUrl) {
                document.getElementById("gif").src = gifUrl;
            }
        }
    });
});
