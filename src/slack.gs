function isSlackApiVerification(data) {
  return data.type == "url_verification"
}

function sendMessage(channelId, message) {
  const token = getSlackBotToken()

  const slackApp = SlackApp.create(token)

  slackApp.postMessage(channelId, message)
}

// ===================
// private
// ===================
function getSlackBotToken() {
  const properties = PropertiesService.getScriptProperties().getProperties()

  return properties.SLACK_BOT_OAUTH_TOKEN
}
