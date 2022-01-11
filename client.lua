RegisterCommand('burgermenu', function()
	TriggerEvent('bz_burgermenu:open')
end)


RegisterNetEvent('bz_burgermenu:open')
AddEventHandler('bz_burgermenu:open', function()
	SetNuiFocus(true, true)
	SendNUIMessage({action = "open"})
end)

RegisterNUICallback('close', function(data)
	SetNuiFocus(false, false)
end)