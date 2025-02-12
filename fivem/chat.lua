RegisterNetEvent('chat:processMessage')
AddEventHandler('chat:processMessage', function(message)
    local emojiMap = {
        [":nugg:"] = "<img src='nui://nugg_emojis/html/img/FullNugg.png' width='20' height='20'>",
        [":nugg2:"] = "<img src='nui://nugg_emojis/html/img/emoji_nugg.png' width='20' height='20'>"
    }
    
    for code, replacement in pairs(emojiMap) do
        message = string.gsub(message, code, replacement)
    end
    
    return message
end)
