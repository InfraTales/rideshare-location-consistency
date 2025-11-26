# Security Overview

This document summarizes the security posture of the **Rideshare Location Consistency** architecture. For the full threat model and control mapping, see the root `SECURITY.md` file.

## Defense-in-Depth

The system applies multiple layers of security controls:

- **Identity & Access (IAM)**
  - Least-privilege IAM roles for Lambdas, Kinesis, and other services
  - Separate execution roles for ingestion, processing, consistency checking, and correction flows
  - Scoped access to only required DynamoDB tables, S3 buckets, and streams

- **Network Isolation**
  - Workloads deployed inside a VPC
  - Private subnets for data-plane components (DynamoDB clients, Neptune, ElastiCache)
  - Security groups restricting traffic to required ports and services only

- **Encryption**
  - **At rest**: KMS-backed encryption for DynamoDB, Neptune, ElastiCache, S3 snapshots, and logs
  - **In transit**: TLS for all client-to-service and service-to-service communication where supported

- **Observability & Audit**
  - CloudWatch Logs and metrics for all Lambda functions and streams
  - CloudTrail for API-level auditing
  - Dashboards and alarms for unusual error rates, throttling, or replication lag

## Multi-Region Considerations

Because the architecture is multi-region and active-active:

- Access policies are scoped by **region + environment** (e.g., `dev`, `prod`).
- Tags (Environment, Project, Owner, CostCenter) help drive guardrails and policies.
- Cross-region replication and data movement are monitored and logged.

## Compliance-Friendly Practices

While not a compliance product by itself, the stack is built to align with common cloud controls:

- Centralized logging and metrics across regions
- Strong isolation between environments (dev/stage/prod)
- Explicit IAM roles and policies that can be mapped to control frameworks

> For a complete security discussion, including specific services and sample policies, refer to `SECURITY.md` in the project root.
