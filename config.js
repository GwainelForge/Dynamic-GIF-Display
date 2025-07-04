function saveConfig() {
    const gifUrl = document.getElementById("gifUrl").value;
    Twitch.ext.configuration.set("broadcaster", "1", JSON.stringify({ gifUrl }));
}

Twitch.ext.onAuthorized(() => {
    Twitch.ext.configuration.onChanged(() => {
        if (Twitch.ext.configuration.broadcaster) {
            const config = JSON.parse(Twitch.ext.configuration.broadcaster.content);
            document.getElementById("gifUrl").value = config.gifUrl || "";
        }
    });
});
