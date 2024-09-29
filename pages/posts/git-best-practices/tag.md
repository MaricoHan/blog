# Tag

## 命名规范

标准的版本号格式为 `vMAJOR.MINOR.PATCH`，下面是具体的定义：

- `MAJOR`：主版本号，当你做了不兼容的 API 修改时，需要增加主版本号。
- `MINOR`：次版本号，当你做了向下兼容的功能性新增时，需要增加次版本号。
- `PATCH`：修订版本号，当你做了向下兼容的问题修正时，需要增加修订号。

如果是基于 `hotfix` 分支创建的 tag，则 tag 命名格式为 `vx.x.x-hotfixN`。

## 拓展：alpha 版、beta 版 ...

许多软件在正式发布前都会发布一些预览版或测试版，通常被称为“`beta` 版”或“`rc` 版”，特别是开源软件，甚至还有“`alpha` 版”。以下是对各个版本号的解释：

- `alpha` 版：内部测试版。`α` 是希腊字母的第一个，表示最早的版本号，一般用户不要使用这个版本，这个版本号包含很多 BUG，功能也不全，主要是给开发者和测试人员测试和找 BUG 用的。

- `beta` 版：公开测试版。`β` 是希腊字母的第二个，顾名思义，这个版本号比 `alpha` 版发布得晚一些，主要是给“社区”用户和忠实用户测试用的，该版本号仍然存在很多 BUG，但相对于 `alpha` 版要稳定一些。在这个阶段，软件版本还会不断添加新功能。如果你是发烧友，可以使用该版本。

- `rc` 版：全写：Release Candidate（候选版本），该版本比 `beta` 版更进一步，类似最终发行版的预览版，该版本功能不再添加，和最终发布版功能一样。这个的发布就表明离最终发行版不远了。作为普通用户，如果你非常急需使用这个软件的话，也可以使用该版本。