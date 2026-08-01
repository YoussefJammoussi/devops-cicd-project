# Grafana Monitoring

## Description
Grafana is used to visualize metrics collected by Prometheus.

## Configuration
- Grafana URL: http://<VM1-IP>:3000
- Data Source: Prometheus
- Prometheus URL: http://localhost:9090

## Monitored Metrics
- CPU Usage
- RAM Usage
- Disk Usage
- Target Status (UP/DOWN)

## Dashboard
Node Exporter metrics are visualized through Grafana dashboards connected to Prometheus.

## Components
- Grafana Server
- Prometheus Data Source
- Node Exporter on VM1
- Node Exporter on VM2
