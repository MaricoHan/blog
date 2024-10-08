# Commit

> 请遵循各自团队的实际规范。

## Commit 边界

使用 Git 非常重要的一点是要确定单个 commit 的修改边界：每个 commit 应该是一个独立的更改，只包含一个功能或修复，避免在一个 commit 中混合不同的功能更改。否则会带来很多弊端，包括不限于：

- 难以回滚：当 commit 内容太杂，想要撤回某部分的修改时，不能使用 `git revert` 或 `git reset` 进行回滚。
- 难以复用：当想版本 A 想复用对 版本 B 得某个部分的修改时，无法使用 `git cherry-pick` 摘取特定的修改。
- 难以定位：当使用 `git bisect` 定位 bug 是由哪个 commit 提交携带时，如果单个 commit message 太杂/不清晰，无法快速识别是否可以直接跳过。就算的定位到了特定的 commit，由于修改内容太杂，无法定位是哪部份修改引入的 bug。

另外，规范 commit message 是限制 commit 独立性的关键手段。
## Message 格式

Commit Message 应该是写清楚 "**做了什么**" 以及 "**为什么这么做**"！

在撰写 Commit Message，应该有以下目标：

- 可以通过脚本自动生成 CHANGELOG.md
- 任意时刻，团队其他人浏览历史记录时，可以快速了解当时的情况
- 在 `git bisect` 过程中，可以快速的判断重要性，然后跳过（例如：格式化等）

清晰明了的 Commit Message 通常分为以下三大部分（空行分隔）：

```txt
<type>(<scope>): <subject>
 
<description>
 
<footer>
```

任何一行提交信息都不能超过100个字符，以便于在 GitHub 和各种 Git 工具中阅读。

### `<type>`（必填）

`type` 的作用是声明本次修改所属的类型，相当于是定个标签。
Reviewer 可以通过 `type` 快速的知道该以什么样的角度来看本次修改的内容，例如：

- fix：Reviewer 就会关注 bug 是什么，以及如何修复的
- docs：Reviewer 就会知道只是修改了文档，不会带入功能性的 bug，心态就会轻松点。

`type` 的数量不宜太多，否则会增加开发者和阅读者的心智负担，提交信息更容易变得混乱，难以管理。一般来说，团队内部约定的 `type` 不应该超过 10 个，常见允许的 `type` 是：

- feat（新特性）
- fix（错误修复）
- docs（文档更新）
- style（代码格式调整）
- refactor（代码重构）
- test（添加测试）
- chore（维护任务）

如果不知道如何决定使用的 `type` 类型，本文在结尾列举一些例子，请参考[示例](#示例)
### `<scope>`（可选）

`scope` 的作用是声明本次修改所影响的功能/范围。
`scope` 应该简短而精炼，通常是一个单词或短语，足以描述更改的范围。

例如：

- `feat(login): add two-factor authentication`
- `fix(signup): handle empty email input`
- `refactor(navigation): replace dropdown with a sidebar`
- `docs(readme): update installation guide`

### `<subject>`（必填）

`subject` 的作用是声明本次修改的主要内容。

`subject` 的撰写规范：

- **长度限制**：应该简短明确地描述本次提交的主要内容，长度不超过 50 个字符。
- **句式时态**：使用祈使语气和现在时来描述动作。例如，使用 "fix" 而不是 "fixed" 或 "fixes"。
- **内容限制**：`subject` 应该避免包含具体实现细节，这些细节应该放在提交信息的正文部分。
- **小写字母**：`subject` 的第一个字母应该使用小写，以保持格式的一致性和专业性。
- **无句号**：在 `subject` 的末尾不要使用句号或其他标点符号。

### `<description>`（必填）

`description` 的作用是描述本次修改了什么、为什么修改。

`description` 的撰写规范：

- **句式时态**：与 `subject` 一样，使用祈使句，现在时
- **解释动机**：包括更改的动机、为什么要修改、与之前行为的对比
- **内容限制**：应避免过于技术化的语言/细节，导致其他人难以理解。

示例：

```
fix: prevent memory leak in API calls
 
The API calls were not properly closing database connections, leading to a memory leak.
This fix ensures that all connections are closed after the API request is completed.
 
Closes #123
```

### `<footer>`（可选）

`footer` 的作用是提供与 commit 相关的额外信息，如关联的问题跟踪编号、说明破坏性变更（Breaking Changes）或提供闭环信息。

`footer` 的撰写规范：

- **关联问题**：关联相关的问题 `Closes #123` 或 `Fixes #456`，可以引用多个问题，逗号分隔。
	- **Closes**：表示提交解决了某个问题，并且这个问题应该被关闭。
	- **Fixes**：与 `Closes` 类似，但更强调这是一个错误修复。
- **破坏性变更**：以 `BREAKING CHANGE:` 开头，后跟描述和迁移指南。

示例：

```txt
feat: add new API endpoint
 
This new endpoint allows users to fetch additional data.
 
BREAKING CHANGE: The 'getUser' endpoint has been renamed to 'fetchUser'.
 
Before:
GET /api/getUser
 
After:
GET /api/fetchUser
 
This change was made to align with our new naming conventions.
 
Closes #123, #456, #789
```

### 示例

列举了一些标题的例子，方便大家理解如何选择 `type`：

> - feat：添加新功能。例如：  
>   - feat: 添加用户注册功能。  
> - refactor：不改变功能的情况下改进代码结构、修改变量名等。例如：  
>   - refactor(test): 重写单元测试以使用新的测试框架  
>   - refactor: 重命名变量并更新相关注释  
>   - refactor: 简化支付流程的代码逻辑  
>   - refactor: 使用更清晰的命名重构变量  
>   - refactor: 将订单处理逻辑从用户服务中分离  
>   - refactor: 移除死代码和无用的注释  
>   - refactor: 重新组织代码文件以提高逻辑性  
> - fix：修复 bug。例如：  
>   - fix: 修复用户登录时的会话超时问题  
> - perf：提升性能。例如：  
>   - perf: 改进算法，减少响应时间  
>   - perf: 重构代码以提高CPU使用效率  
>   - perf: 优化数据结构减少内存占用  
>   - perf: 通过索引改进数据库查询性能  
>   - perf: 通过懒加载减少初始加载时间  
>   - perf: 通过压缩资源减少网络传输大小  
>   - perf: 优化事件处理提高UI响应速度  
> - style: 为了代码风格而修改，如空格、格式化、缺少分号、修改错别字等。例如：  
>   - style: 统一变量名为驼峰格式  
>   - style: 修正文件头部的注释格式  
>   - style: 为 xxx 增加注释，提高代码可读性  
> - chore: 不修改功能、也不修复bug的更改，如构建过程和辅助工具的更改，例如：  
>   - chore: 更新依赖  
>   - chore: 更新构建脚本的注释  
> - test: 添加或修改测试代码相关的内容。例如：  
>   - test: 为用户模块添加单元测试  
>   - test: 更新测试用例的描述注释  
> - docs: 修改文档、增加代码注释或添加详细说明等。例如：  
>   - docs: 更新用户指南  
>   - docs: 更新函数注释以更好地解释其参数和返回值
