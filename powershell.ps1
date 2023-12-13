# Login to Azure account
Connect-AzAccount

# Select the subscription
$subscriptionId = "<Your-Azure-Subscription-Id>"
Select-AzSubscription -SubscriptionId $subscriptionId

# Create a new resource group
$resourceGroupName = "<Your-Resource-Group-Name>"
$location = "West US"
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
$storageAccountName = "<Your-Storage-Account-Name>"
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS

# Set the storage account properties
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName
Set-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -AccessTier Hot