# Runbook

Operational guide for deploying, operating, and maintaining the **Rideshare Location Consistency** architecture.

For a tutorial-style introduction, see `GETTING_STARTED.md`. This file focuses on day-2 operations.

## 1. Deploying an Environment

### Prerequisites

- AWS credentials configured (profile or environment variables)
- Required tools installed:
  - Node.js / npm
  - Terraform + CDKTF CLI

### Steps

1. **Set environment variables** (example):
   ```bash
   export ENVIRONMENT=dev
   export AWS_REGION=us-east-1
   export REGIONS="us-east-1,us-west-2"
   export DRIVER_COUNT=1000
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Synthesize and deploy**:
   ```bash
   cdktf synth
   cdktf deploy
   ```
4. **Verify deployment**:
   - Check Terraform outputs for:
     - IoT endpoint
     - DynamoDB table name
     - Step Functions state machine ARN
   - Confirm CloudWatch dashboards and alarms were created.

## 2. Scaling and Configuration Changes

- **Increase or decrease `DRIVER_COUNT`** to reflect new traffic assumptions.
- **Adjust `REGIONS`** when adding or removing regions.
- Re-run `cdktf deploy` to apply changes.
- Monitor:
  - DynamoDB throttling
  - Lambda duration and errors
  - Replication lag between regions

## 3. Monitoring & Alerts

- Use the **Monitoring** constructs' CloudWatch dashboards to observe:
  - Kinesis throughput and iterator age
  - Lambda error rates and throttles
  - DynamoDB consumed capacity and replication metrics
- Ensure alerts are wired to email/SNS/ChatOps channels used by your team.

## 4. Maintenance Tasks

- Regularly review **DynamoDB capacity** and adjust autoscaling policies.
- Rotate IAM roles/keys and ensure policies remain least-privilege.
- Clean up unused regions or test environments to reduce cost.

## 5. Teardown

To fully remove the stack from an account:

```bash
cdktf destroy
```

Optionally, use the helper scripts in `scripts/` (e.g., `cleanup.sh`) to remove any extra artifacts created during experiments or load testing.
