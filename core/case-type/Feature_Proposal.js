// Case Type: Feature_Proposal
module.exports = {
  "caseType": {
    "id": "Feature_Proposal",
    "label": "Feature Proposal"
  },
  "stages": [
    {
      "id": "Intake",
      "label": "Intake",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "feature-proposal-intake-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "feature_intake_1",
          "label": "Submit Proposal",
          "type": "manual",
          "status": "pending",
          "view": "feature-proposal-intake-submit-proposal",
          "dataModelReference": {
            "attributes": [
              "feature_id",
              "feature_title",
              "feature_summary",
              "feature_requested_by",
              "user_name",
              "user_email"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "feature-proposal-intake-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Evaluation",
      "label": "Evaluation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "feature-proposal-evaluation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "feature_eval_1",
          "label": "Business & Technical Review",
          "type": "manual",
          "status": "pending",
          "view": "feature-proposal-evaluation-business-&-technical-review",
          "dataModelReference": {
            "attributes": [
              "feature_business_value",
              "feature_complexity",
              "component_id",
              "component_priority",
              "feature_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "feature-proposal-evaluation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Design",
      "label": "Design",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "feature-proposal-design-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "feature_design_1",
          "label": "Design Scope",
          "type": "manual",
          "status": "pending",
          "view": "feature-proposal-design-design-scope",
          "dataModelReference": {
            "attributes": [
              "component_name",
              "component_version",
              "feature_target_release",
              "feature_summary"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "feature-proposal-design-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Planning",
      "label": "Planning",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "feature-proposal-planning-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "feature_plan_1",
          "label": "Implementation Planning",
          "type": "manual",
          "status": "pending",
          "view": "feature-proposal-planning-implementation-planning",
          "dataModelReference": {
            "attributes": [
              "feature_complexity",
              "feature_target_release",
              "user_email",
              "feature_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "feature-proposal-planning-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Approval",
      "label": "Approval",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "feature-proposal-approval-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "feature_approval_1",
          "label": "Final Approval",
          "type": "manual",
          "status": "pending",
          "view": "feature-proposal-approval-final-approval",
          "dataModelReference": {
            "attributes": [
              "feature_status",
              "feature_business_value",
              "feature_target_release"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "feature-proposal-approval-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};