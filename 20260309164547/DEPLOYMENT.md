# GitHub Pages 部署指南

## 步骤1：创建GitHub仓库

1. 访问 [GitHub.com](https://github.com) 并登录你的账户
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `bookstore-website` (或你喜欢的名称)
   - **Description**: `一个精美的在线书店网站`
   - 选择 **Public** (公开仓库)
   - 勾选 "**Add a README file**"
   - 点击 "Create repository"

## 步骤2：上传文件到GitHub

### 方法A：使用GitHub网页界面（推荐初学者）

1. 进入你刚创建的仓库页面
2. 点击 "Add file" → "Upload files"
3. 将项目文件夹中的所有文件拖拽到上传区域
4. 点击 "Commit changes"

### 方法B：使用Git命令行（推荐有经验的用户）

```bash
# 1. 克隆仓库到本地
git clone https://github.com/你的用户名/bookstore-website.git

# 2. 复制所有文件到仓库文件夹
cp -r /Users/a123/WorkBuddy/20260309164547/* bookstore-website/

# 3. 添加文件到Git
git add .

# 4. 提交更改
git commit -m "初始化书店网站"

# 5. 推送到GitHub
git push origin main
```

## 步骤3：启用GitHub Pages

1. 进入你的仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择：
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. 点击 "Save"

## 步骤4：访问你的网站

部署完成后，你的网站将在以下地址可用：
- **https://你的用户名.github.io/bookstore-website/**

首次部署可能需要几分钟时间。你可以在仓库的 "Settings" → "Pages" 页面查看部署状态。

## 故障排除

### 如果网站无法访问：
1. 检查部署状态是否显示 "Your site is published at..."
2. 确保所有文件都已正确上传
3. 检查是否有构建错误

### 如果样式或图片不显示：
1. 确保所有CSS和图片文件路径正确
2. 检查浏览器控制台是否有错误信息

## 自定义域名（可选）

如果你有自己的域名：
1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名（如：`bookstore.yourdomain.com`）
3. 在你的域名注册商处设置CNAME记录指向 `你的用户名.github.io`

## 自动部署

每次你向 `main` 分支推送更改时，GitHub Actions会自动重新部署你的网站。

---

**注意**：确保你的仓库名称和用户名都正确，URL格式为：`https://用户名.github.io/仓库名/`