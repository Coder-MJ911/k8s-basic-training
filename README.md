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
kubectl logs: 在容器或指定资源中打印容器的日志。如果Pod只有一个容器，则容器名称是Optional的。
eg:
kubectl logs --tail=20 --- nginx Display only the most recent 20 lines of output in pod nginx

kubectl describe: 打印所选资源的详细描述，包括相关资源，例如事件或控制器。您可以按名称选择单个对象，该类型的所有对象，提供名称前缀或标签选择器。
eg：
kubectl describe pods/nginx --- Describe a pod

kubectl apply: 通过文件名或标准输入将配置应用于资源。必须指定资源名称。如果该资源尚不存在，则将创建它。
eg：
kubectl apply (-f FILENAME | -k DIRECTORY)

kubectl delete: 按文件名，标准输入，资源和名称，或按资源和标签选择器删除资源。
eg:
kubectl delete pods,services -l name=myLabel --- Delete pods and services with label name=myLabel

```
将示例中的 Node.js 应用（或自定义其他工程）通过 Deployment 部署，经过Service组织后由Ingress暴露出可被访问的API（使用kubectl apply）

```shell
eval $(minikube -p minikube docker-env)  //用过之后还是拉不到本地image 最终用了远端的
docker build -t myproject/myimage ./basic-express
minikube start
kubectl apply -f k8s/ (OR kubectl create deployment k8s-deployment --image=myproject/myimage)
kubectl expose deployment k8s-deployment --type=NodePort --port=8080
kubectl get services k8s-deployment
```

使用 kubectl get查看本地运行的所有pod，deployment，service，使用kubectl describe查看pod，deployment的详细信息
```shell
kubectl get pods [name]
kubectl get service [name]
kubectl get deployment [name]
kubectl get ingress [name]
kubectl describe pods [name]
kubectl describe service [name]
kubectl describe ingress [name]
kubectl describe deployment [name]
```

使用 kubectl log 查看正在运行的pod的日志
```shell
kubectl logs [pod-name]
```

使用 kubectl port-forward 命令将本地请求直接转发到 pod
```shell
Forward one or more local ports to a pod:
kubectl port-forward POD [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N] [flags]

eg:
Listen on port 8888 on localhost addresses, forwarding to 3000 in the pod:
kubectl port-forward --address 127.0.0.1 pod/[pod-name] 8888:3000
```


Advanced

AC:
安装 k8s dashboard，通过 dashboard 进行扩容 / 收缩:
```shell
minikube dashboard
```
```html
click the deployment then click actions then scale this deployment
```

使用kubectl scale命令对deployment进行扩容 / 收缩:
```shell
If the deployment named k8s-deployment and current size is 3, scale it to 4:
kubectl scale --current-replicas=3 --replicas=4 deployment/k8s-deployment
```

简单描述 Pod, Node, Deployment, Service, Ingress, ReplicaSet, Namespace 概念

创建一个kubernetes cronjob（扩展 Node.js 应用或使用其他工程）
```shell
kubectl apply -f ./k8s/cronjob
```




Others Point:
```shell
How to delete all pod:
kubectl delete pods --all

How to delete all service:
kubectl delete service --all

How to delete all cronjob:
kubectl delete cronjob --all

How to delete a deployment by name:
kubectl delete deployment k8s-deployment

How to delete all ingress:
kubectl delete ingress --all

How to check deployment:
kubectl get deployment

How to check status of deployment:
kubectl rollout status deployment/k8s-deployment
```

```shell
最终解决办法(使用docker desktop,minikube没有使用,理论上没问题):
1. sudo vim /etc/hosts => insert '127.0.0.1 my.first.k8s.local'
2. kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml
3. kubectl apply -f /k8s/ingress-template.yml 
```