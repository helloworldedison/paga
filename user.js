let body = $response.body;
let _body = JSON.parse(body)
_body['featureStatuses']['CUSTOMER_APP_FEATURE_VIRTUAL_PAGA_CARD_USD']=true
_body['featureStatuses']['CUSTOMER_APP_FEATURE_PHYSICAL_PAGA_CARD_USD']=true
$done({body: JSON.stringify(_body)});
