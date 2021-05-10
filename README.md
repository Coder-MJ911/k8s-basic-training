# k8s-basic-training

Target: Build basic k8s service knowledge & concept.

We will discuss about: 
- pod
- namespace
- kubectl
- ingress / service / deployment / cronjob[Optional]
- dashboard[Optional]

## Workshop

### Prerequisites

- Docker
- Kubectl => `brew install kubectl`
- MiniKube => `brew install minikube`

### Get start

To start your cluster, you can use `minikube start`. Once it done, you will get the "minikube" cluster and the "default" namespace.

Before we jump into further details, let's go to the dashboard to get a general overview.

```
$ minikube dashboard
```

Topic
在本地部署一个 k8s 集群，了解k8s各种基础资源和基本操作命令。

Basic

AC:
在本地安装 kubectl 命令行以及任意 k8s 运行环境（MiniKube / Docker Desktop / 其他）
简述 kubectl log / describe / apply / delete 命令的功能
```html
kubectl log:
kubectl describe
kubectl apply
kubectl delete
```
将示例中的 Node.js 应用（或自定义其他工程）通过 Deployment 部署，经过Service组织后由Ingress暴露出可被访问的API（使用kubectl apply）

使用 kubectl get查看本地运行的所有pod，deployment，service，使用kubectl describe查看pod，deployment的详细信息

使用 kubectl log 查看正在运行的pod的日志

使用 kubectl port-forward 命令将本地请求直接转发到 pod


Advanced

AC:
安装 k8s dashboard，通过 dashboard 进行扩容 / 收缩；使用kubectl scale命令对deployment进行扩容 / 收缩
简单描述 Pod, Node, Deployment, Service, Ingress, ReplicaSet, Namespace 概念
创建一个kubernetes cronjob（扩展 Node.js 应用或使用其他工程）
