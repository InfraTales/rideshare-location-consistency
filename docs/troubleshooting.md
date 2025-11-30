# Troubleshooting

Common issues and resolutions for the **Rideshare Location Consistency** stack.

## Table of Contents

- [Deployment Issues](#deployment-issues)
- [Data & Replication Issues](#data--replication-issues)
- [Performance & Throttling](#performance--throttling)
- [Cost Surprises](#cost-surprises)
- [Cleaning Up](#cleaning-up)

---

## Deployment Issues

### 1. `cdktf deploy` fails with authentication/authorization errors

**Symptom:** Terraform/CDKTF reports errors like `AccessDenied`, `UnrecognizedClientException`, or missing permissions.

**Probable Causes:**
- AWS credentials not configured for the target account/region.
- IAM principal lacks rights to create required resources (DynamoDB, Neptune, ElastiCache, Kinesis, Step Functions, IoT, S3).

**Resolution:**
- Verify `aws sts get-caller-identity` returns the expected account.
- Attach or update an IAM policy with the necessary permissions for the IaC deployment role.

### 2. Deployment stuck or slow on stateful services

**Symptom:** Stack creation is slow or times out around DynamoDB Global Tables, Neptune, or ElastiCache clusters.

**Probable Causes:**
- Regional service capacity constraints.
- Misconfigured subnet groups or security groups.

**Resolution:**
- Check the AWS console for DynamoDB, Neptune, and ElastiCache events.
- Verify subnet group and security group IDs are valid and have available IPs.

---

## Data & Replication Issues

### 3. High replication lag between regions

**Symptom:** Reads from secondary regions show stale driver locations for longer than expected.

**Probable Causes:**
- DynamoDB Global Tables approaching provisioned or autoscaled limits.
- Cross-region network latency or transient service issues.

**Resolution:**
- Inspect DynamoDB metrics (replication latency, throttled requests).
- Increase write/read capacity or adjust autoscaling settings.
- Reduce unnecessary write amplification if possible.

### 4. Drift detection not triggering corrections

**Symptom:** Known inconsistencies remain longer than expected; Step Functions state machine appears idle.

**Probable Causes:**
- EventBridge schedule misconfigured or disabled.
- Step Functions executions failing early.

**Resolution:**
- Confirm EventBridge rules are enabled.
- Review Step Functions execution history for failures.
- Check Lambda logs for the drift-detection and correction Lambdas.

---

## Performance & Throttling

### 5. Lambda throttling or timeouts

**Symptom:** High error or throttle rates on ingestion or processing Lambdas.

**Probable Causes:**
- Concurrency limits reached.
- Under-sized memory or timeout configuration.

**Resolution:**
- Increase reserved concurrency for critical Lambdas.
- Increase memory/timeout where justified and re-deploy.
- Investigate hot-partition patterns in DynamoDB that increase Lambda pressure.

### 6. Kinesis or DynamoDB capacity issues

**Symptom:** Kinesis iterator age grows; DynamoDB shows throttling.

**Resolution:**
- Increase Kinesis shard count / on-demand capacity as appropriate.
- Adjust DynamoDB auto-scaling or switch to on-demand.
- Confirm load-test traffic patterns are realistic.

---

## Cost Surprises

### 7. Monthly bill higher than expected

**Symptom:** AWS bill for the account or project tags is significantly above planned ranges.

**Probable Causes:**
- Too many active regions in non-prod.
- Large ElastiCache or Neptune clusters sized for production in dev/test.
- Synthetic traffic or load tests left running.

**Resolution:**
- Use cost explorer filtered by project tags to identify the main drivers.
- Right-size or shut down non-essential regions and clusters.
- Turn off traffic generators when not actively testing.

---

## Cleaning Up

### 8. `cdktf destroy` completes but some resources remain

**Symptom:** After destroy, some resources (buckets, logs, manual test data) still exist.

**Probable Causes:**
- Manually created resources outside IaC.
- Buckets or logs with retention policies.

**Resolution:**
- Review resources by project tags (Project, Environment, CostCenter).
- Manually delete leftover resources using the console or CLI.
- Consider extending IaC coverage to include more of the supporting infrastructure.

For deeper troubleshooting details and architectural context, see the README and cost.md.
