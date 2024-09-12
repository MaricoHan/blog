# 获取 CA 证书

获取 CA 证书有两种方式：

- 申请证书：按照 CA 机构的要求，完成对 `域名`/`公网 IP` 的所有权验证，获取发放的 SSL 证书。
- 自签证书：自行签发的证书，不受浏览器信任，用于测试环境、内部网络、无需第三方认证。

使用证书的流程为：

1. 获取证书（申请证书/自签证书）。
2. 将证书上传到服务器，根据服务器类型（例如 Nginx）配置 SSL 设置以启用 HTTPS 服务。

## 申请证书

申请 CA 证书不一定要使用域名，也可以直接使用公网 IP 地址。但是需要选择支持 IP 地址证书的 CA 机构，例如 JoySSL。申请证书的流程如下：

1. 确定一个`域名`/`公网 IP`，并且对其有管理权限。
2. 选择一个 CA 机构，完成其进行的`域名`/`公网 IP`的所有权验证。
3. 验证通过，就可以下载其发放的密钥和证书。

通常来说，生产环境都是为域名申请证书：

```
# 安装 acme
curl https://get.acme.sh|sh
 
# 安装依赖(一路回车)
apt install socat
 
# 添加软连接
ln -s /root/.acme.sh/acme.sh /usr/local/bin/acme.sh
 
# 注册账号
acme.sh --register-account -m my@example.com
 
# 开放涉及到的对外端口
ufw allow 80 # CA 机构需要访问该端口进行认证，认证通过下发证书
 
#「申请证书」，这里如果不成功，请看下面的引用说明，切换 CA 机构
acme.sh --issue -d www.你的域名.com --standalone -k ec-256
 
# 安装证书(安装完就会在当前文件夹下出现 key 和 crt 文件)
acme.sh --installcert -d www.你的域名.com --ecc --key-file ./server.key --fullchain-file ./server.crt
```

> 注意：如果在「申请证书」那一步，默认 CA 无法颁发（报错或一直重试），则先可以切换下列 CA 机构，然后再从「申请证书」重新执行:
>
> - 切换 Let's Encrypt: `acme.sh --set-default-ca --server letsencrypt`
> - 切换 Buypass: `acme.sh --set-default-ca --server buypass`
> - 切换 ZeroSSL: `acme.sh --set-default-ca --server zerossl`

## 自签证书（不推荐）

自签证书不应在生产环境中用于公共网站，否则会导致浏览器警告⚠️，提示用户证书不受信任。

如果是测试环境、内部网络、无需第三方认证，可以本地自行签发 SSL 证书：

- 生成私钥: `openssl ecparam -genkey -name prime256v1 -out ca.key`
- 生成证书: `openssl req -new -x509 -days 36500 -key ca.key -out ca.crt -subj "/CN=bing.com"`

上面是为 `bing.com` 生成 `ca.crt` 证书，这个域名是可以随便换的，因为自签证书可以为任意域名生成证书。