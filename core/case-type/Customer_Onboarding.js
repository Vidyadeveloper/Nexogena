// Case Type: Customer_Onboarding
module.exports = {
  "caseType": {
    "id": "Customer_Onboarding",
    "label": "Customer Onboarding"
  },
  "stages": [
    {
      "id": "Kickoff",
      "label": "Kickoff",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "customer-onboarding-kickoff-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "onboard_kickoff_1",
          "label": "Schedule Kickoff",
          "type": "manual",
          "status": "pending",
          "view": "customer-onboarding-kickoff-schedule-kickoff",
          "dataModelReference": {
            "attributes": [
              "onboarding_id",
              "onboarding_customer_name",
              "onboarding_account_id",
              "onboarding_start_date",
              "onboarding_assigned_engineer"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "customer-onboarding-kickoff-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Setup",
      "label": "Setup",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "customer-onboarding-setup-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "onboard_setup_1",
          "label": "Configure & Integrate",
          "type": "manual",
          "status": "pending",
          "view": "customer-onboarding-setup-configure-&-integrate",
          "dataModelReference": {
            "attributes": [
              "component_id",
              "component_version",
              "onboarding_success_criteria",
              "onboarding_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "customer-onboarding-setup-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Validation",
      "label": "Validation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "customer-onboarding-validation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "onboard_validate_1",
          "label": "Validate Success Criteria",
          "type": "manual",
          "status": "pending",
          "view": "customer-onboarding-validation-validate-success-criteria",
          "dataModelReference": {
            "attributes": [
              "onboarding_success_criteria",
              "onboarding_completion_date",
              "onboarding_status",
              "user_email"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "customer-onboarding-validation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Handover",
      "label": "Handover",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "customer-onboarding-handover-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "onboard_handover_1",
          "label": "Handover to Support",
          "type": "manual",
          "status": "pending",
          "view": "customer-onboarding-handover-handover-to-support",
          "dataModelReference": {
            "attributes": [
              "onboarding_status",
              "onboarding_assigned_engineer",
              "onboarding_account_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "customer-onboarding-handover-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};