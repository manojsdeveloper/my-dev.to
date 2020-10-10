###what is Zeebe?
Zeebe is a workflow engine for microservices orchestration(the arrangement).
Zeebe ensures that, once started, flows are always carried out fully, retrying steps in case of failures.
Zeebe maintains complete audit log so progress of flow monitored.
Zeebe is fault tolerant and scales seamlessly to handle growing transaction volumes.

####What problem does Zeebe solve, and how?
A company’s end-to-end workflows almost always span more than one microservice. In an e-commerce company, for example, a “customer order” workflow might involve a payments microservice, an inventory microservice, a shipping microservice, and more:

These cross-microservice workflows are mission critical, yet the workflows themselves are rarely modeled and monitored. Often, the flow of events through different microservices is expressed only implicitly in code.

If that’s the case, how can we ensure visibility of workflows and provide status and error monitoring? How do we guarantee that flows always complete, even if single microservices fail?

Zeebe gives you:

**Visibility** into the state of a company’s end-to-end workflows, including the number of in-flight workflows, average workflow duration, current errors within a workflow, and more.

**Workflow orchestration** based on the current state of a workflow; Zeebe publishes “commands” as events that can be consumed by one or more microservices, ensuring that workflows progress according to their definition.

**Monitoring for timeouts** or other workflow errors with the ability to configure error-handling paths such as stateful retries or escalation to teams that can resolve an issue manually.

Zeebe was designed to operate at very large scale, and to achieve this, it provides:

**Horizontal scalability** and no dependence on an external database; Zeebe writes data directly to the filesystem on the same servers where it’s deployed. Zeebe makes it simple to distribute processing across a cluster of machines to deliver high throughput.
**Fault tolerance** via an easy-to-configure replication mechanism, ensuring that Zeebe can recover from machine or software failure with no data loss and minimal downtime. This ensures that the system as a whole remains available without requiring manual action.
**A message-driven architecture** where all workflow-relevant events are written to an append-only log, providing an audit trail and a history of the state of a workflow.
**A publish-subscribe interaction model**, which enables microservices that connect to Zeebe to maintain a high degree of control and autonomy, including control over processing rates. These properties make Zeebe resilient, scalable, and reactive.
**Visual workflows modeled in ISO-standard BPMN 2.0** so that technical and non-technical stakeholders can collaborate on workflow design in a widely-used modeling language.
**A language-agnostic client model**, making it possible to build a Zeebe client in just about any programming language that an organization uses to build microservices.
**Operational ease-of-use** as a self-contained and self-sufficient system. Zeebe does not require a cluster(a group of similar things) coordinator such as ZooKeeper. Because all nodes in a Zeebe cluster are equal, it's relatively easy to scale, and it plays nicely with modern resource managers and container orchestrators such as Docker, Kubernetes, and DC/OS. Zeebe's CLI (Command Line Interface) allows you to script and automate management and operations tasks.

##Zeebe is simple and lightweight

Most existing workflow engines offer more features than Zeebe. While having access to lots of features is generally a good thing, it can come at a cost of increased complexity and degraded performance.

Zeebe is 100% focused on providing a compact, robust, and scalable solution for orchestration of workflows. Rather than supporting a broad spectrum of features, its goal is to excel within this scope.

In addition, Zeebe works well with other systems. For example, Zeebe provides a simple event stream API that makes it easy to stream all internal data into another system such as Elastic Search for indexing and querying.

