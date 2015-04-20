module.exports = {
    hello: function(req, res) {

        var p = {
            "searchTypeOptions": [{
                "value": "account_name",
                "label": "Account Name"
            }, {
                "value": "account_id",
                "label": "Account ID"
            }, {
                "value": "account_email",
                "label": "Account Email"
            }, {
                "value": "store_name",
                "label": "Store Name"
            }, {
                "value": "store_id",
                "label": "Store ID"
            }, {
                "value": "user_id",
                "label": "Internal User ID"
            }],
            "fields": [{
                "name": "store_id",
                "label": "Store ID",
                "showInGrid": false
            }, {
                "name": "store_name",
                "label": "Store Name",
                "showInGrid": true
            }, {
                "name": "account_id",
                "label": "Account ID",
                "showInGrid": false
            }, {
                "name": "account_name",
                "label": "Account Name",
                "showInGrid": true
            }, {
                "name": "balance",
                "label": "Ending<br/>Balance",
                "showInGrid": true,
                "currency": true
            }, {
                "name": "current_deposit",
                "label": "Next<br/>Deposit",
                "showInGrid": true,
                "currency": true
            }, {
                "name": "pending_balance",
                "label": "Pending<br/>Balance",
                "showInGrid": true,
                "currency": true
            }, {
                "name": "billing_day",
                "label": "Billing<br/>Day",
                "showInGrid": true
            }, {
                "name": "billing_state",
                "label": "Billing<br/>State",
                "showInGrid": true
            }, {
                "name": "payment_method_state",
                "label": "Payment<br/>Method<br/>State",
                "showInGrid": true
            }, {
                "name": "account_email",
                "label": "Account Email",
                "showInGrid": true
            }, {
                "name": "user_id",
                "label": "Internal<br/>User ID",
                "showInGrid": true
            }]
        };

        delete p.searchTypeOptions;

        res.json(p);
    }
};