# Cost Analysis (₹)

This document summarizes high-level cost estimates for the **Rideshare Location Consistency** architecture in **Indian Rupees (₹)**.

These numbers are derived from the USD breakdown in `COST_ANALYSIS.md`, using an approximate conversion of **₹80 = $1**. Actual costs will vary by region, discounts, and traffic patterns.

## Production Environment (156k drivers, 45 cities)

At full scale (156,000 drivers across 45 cities and multiple AWS regions), the architecture typically lands in the **₹25–30 lakh/month** range, driven mainly by:

- **DynamoDB Global Tables** – high write throughput and global replication
- **Neptune** – graph workloads for proximity and matching
- **ElastiCache** – regional geospatial indexes
- **Lambda + IoT Core + Kinesis** – ingestion and stream processing
- **Cross-region data transfer** – replication and drift-correction traffic

For a detailed per-service breakdown (IoT Core, Lambda, DynamoDB, ElastiCache, Neptune, Kinesis, S3, data transfer), see `COST_ANALYSIS.md`.

## Development / Staging Environment

A reduced environment (fewer regions, fewer drivers, scaled-down instance sizes) typically falls around:

- **~₹0.5–1.0 lakh/month**, assuming:
  - 1–2 regions instead of 45
  - Thousands of drivers instead of hundreds of thousands
  - Smaller ElastiCache/Neptune footprints

This keeps realistic load patterns without incurring full production cost.

## Dev vs Prod Comparison

| Environment | Approx Monthly Cost (₹) | Notes |
|------------|--------------------------|-------|
| Dev / Staging | ~₹50,000–₹100,000 | 1–2 regions, reduced driver load, smaller instances |
| Production | ~₹2,500,000–₹3,000,000 | 45+ cities, full driver load, multi-region active-active |

## Cost Optimization Strategies

Key levers to control and optimize cost:

- **Scope by region** – run full active-active only where required; keep non-critical regions in warm/standby.
- **Right-size DynamoDB** – use autoscaling and carefully sized WCUs; review access patterns regularly.
- **Tiered environments** – separate sandboxes, dev, staging, and prod with progressively larger footprints.
- **Tune ElastiCache & Neptune** – use smaller node types and fewer replicas in non-prod.
- **Control synthetic load** – only run heavy traffic simulations when needed; shut them down afterward.

For deeper calculations, assumptions, and what-if scenarios, refer to `COST_ANALYSIS.md`.
