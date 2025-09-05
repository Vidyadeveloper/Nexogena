// Case Type: Incident_Report
module.exports = {
  "caseType": {
    "id": "Incident_Report",
    "label": "Incident Report"
  },
  "stages": [
    {
      "id": "Detection",
      "label": "Detection",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "incident-report-detection-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "incident_detect_1",
          "label": "Record Incident",
          "type": "manual",
          "status": "pending",
          "view": "incident-report-detection-record-incident",
          "dataModelReference": {
            "attributes": [
              "incident_id",
              "incident_title",
              "incident_severity",
              "incident_description",
              "incident_detected_at",
              "incident_reported_by"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "incident-report-detection-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Triage",
      "label": "Triage",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "incident-report-triage-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "incident_triage_1",
          "label": "Assign & Triage",
          "type": "manual",
          "status": "pending",
          "view": "incident-report-triage-assign-&-triage",
          "dataModelReference": {
            "attributes": [
              "incident_assigned_to",
              "component_id",
              "component_priority",
              "incident_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "incident-report-triage-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Resolution",
      "label": "Resolution",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "incident-report-resolution-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "incident_resolve_1",
          "label": "Mitigate & Resolve",
          "type": "manual",
          "status": "pending",
          "view": "incident-report-resolution-mitigate-&-resolve",
          "dataModelReference": {
            "attributes": [
              "incident_mitigation",
              "incident_root_cause",
              "incident_resolution_date",
              "incident_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "incident-report-resolution-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Postmortem",
      "label": "Postmortem",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "incident-report-postmortem-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "incident_postmortem_1",
          "label": "Postmortem & Learnings",
          "type": "manual",
          "status": "pending",
          "view": "incident-report-postmortem-postmortem-&-learnings",
          "dataModelReference": {
            "attributes": [
              "incident_root_cause",
              "incident_mitigation",
              "incident_status",
              "user_email"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "incident-report-postmortem-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};