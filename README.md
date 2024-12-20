# DUT_TeacherEvaluation_Auto_Submit_Tool
实现 大连理工大学教务系统学生总结性评教问卷 的 自动填写及提交 的 脚本

参考了 [Nouchi-Kousu 的项目](https://github.com/Nouchi-Kousu/Dlut_auto-StudentSummativeEvaluation)。感谢 [@Houyi2333](https://github.com/Houyi2333) 对本项目的贡献。

本工具为 Tampermonkey 油猴脚本，使用方法见下：

以 暴力猴 为例，添加自定义脚本，直接把脚本的 JavaScript 代码粘贴进去保存即可：

![PixPin_2024-11-25_09-21-14](./image/PixPin_2024-11-25_09-21-14.jpg)
![PixPin_2024-11-25_09-20-08](./image/PixPin_2024-11-25_09-20-08.jpg)

目前实现的功能是：进入问卷页面后，点击页面左下角按钮实现自动填写并提交。

暂时未实现全自动提交所有教师的问卷的功能，可能后续会写，看我心情 233333。

本来想让脚本仅在问卷页面启动的，但是带工这个教务系统的 URL 路由规则非法，油猴不认，没办法，大伙就用户自适应一下吧。

截至目前该脚本功能正常。由于未来问卷系统可能出现变化，如果该脚本出现问题，欢迎提 issue。
