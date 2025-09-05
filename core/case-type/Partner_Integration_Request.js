// Case Type: Partner_Integration_Request
module.exports = {
  "caseType": {
    "id": "Partner_Integration_Request",
    "label": "Partner Integration Request"
  },
  "stages": [
    {
      "id": "Initiation",
      "label": "Initiation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "partner-integration-request-initiation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "integration_init_1",
          "label": "Create Integration Request",
          "type": "manual",
          "status": "pending",
          "view": "partner-integration-request-initiation-create-integration-request",
          "dataModelReference": {
            "attributes": [
              "integration_id",
              "integration_partner_name",
              "integration_spec_document",
              "integration_status",
              "user_email"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "partner-integration-request-initiation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Specification",
      "label": "Specification",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "partner-integration-request-specification-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "integration_spec_1",
          "label": "Define API & Auth",
          "type": "manual",
          "status": "pending",
          "view": "partner-integration-request-specification-define-api-&-auth",
          "dataModelReference": {
            "attributes": [
              "integration_api_endpoint",
              "integration_auth_type",
              "integration_spec_document",
              "component_name"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "partner-integration-request-specification-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Security_Review",
      "label": "Security Review",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "partner-integration-request-security-review-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "integration_security_1",
          "label": "Security Assessment",
          "type": "manual",
          "status": "pending",
          "view": "partner-integration-request-security-review-security-assessment",
          "dataModelReference": {
            "attributes": [
              "integration_security_approval",
              "integration_status",
              "user_name"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "partner-integration-request-security-review-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Implementation",
      "label": "Implementation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "partner-integration-request-implementation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "integration_impl_1",
          "label": "Implement & Test",
          "type": "manual",
          "status": "pending",
          "view": "partner-integration-request-implementation-implement-&-test",
          "dataModelReference": {
            "attributes": [
              "integration_status",
              "integration_api_endpoint",
              "component_version",
              "user_email"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "partner-integration-request-implementation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Go-live",
      "label": "Go-live",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "partner-integration-request-go-live-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "integration_golive_1",
          "label": "Production Launch",
          "type": "manual",
          "status": "pending",
          "view": "partner-integration-request-go-live-production-launch",
          "dataModelReference": {
            "attributes": [
              "integration_status",
              "integration_partner_name",
              "integration_security_approval"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "partner-integration-request-go-live-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};