// ==UserScript==
// @name         大连理工教师评教问卷自动提交工具
// @namespace    https://github.com/Lentinel/DUT_TeacherEvaluation_Auto_Submit_Tool
// @version      1.0
// @description  DUT_TeacherEvaluation_Auto_Submit_Tool
// @author       Lentinel
// @match        *://jxgl.dlut.edu.cn/evaluation-student-frontend/*
// @icon         https://www.dlut.edu.cn/images/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function (global, doc) {
    'use strict';

    setTimeout(function () {



        const containerDiv = doc.querySelector('div[class="main-container"]');
        if (!containerDiv) return;

        const newButton = doc.createElement('button');
        newButton.className = "el-button el-button--primary el-button--small";
        newButton.innerHTML = '<span data-id="q">点我评教</span>';
        containerDiv.appendChild(newButton);

        newButton.addEventListener('click', function () {
            console.log("Starting evaluation...");

            const radioButtons = doc.querySelectorAll('input[type="radio"]');
            const targetText = {
                "教师对学生是否存在过于严厉、对考核要求过于严格的现象？": "否",
                "您会向学弟学妹推荐该老师的课程吗？": "是",
                "教师讲解（理论课）": "老师讲解问题非常清晰透彻，重点非常突出。",
                "教师讲解": "老师注重因材施教，对我指导非常到位。",
                "引导帮助": "老师非常善于启发我的思维，总是对我的问题给予及时、有帮助的反馈，让我对这门课程产生浓厚兴趣。",
                "课程内容": "课程内容对我非常有用，课程所学对我今后学习、工作和生活有很大价值。",
                "教学设计": "教学设计精心，教学组织非常好，师生互动非常活跃，老师讲课或指导有方。",
                "课程资源": "课程资源丰富全面，教材教辅资源齐备，课内外资源互补，很好地满足学习需求。",
                "学习目标": "我非常清楚该课程的学习目标。",
                "学习产出": "我能很好地掌握该课程的知识和能力要点，能运用课程所学分析解决复杂问题，综合能力得到很好的训练和提升。",
                "老师在授课过程中是否有效地融入了思政元素？": "是",
                "教师是否存在放松考核要求，有意诱导学生评教结果？": "否",
                "您对这门课的喜爱度。": "非常喜欢"
            };

            radioButtons.forEach(function (radio) {
                const questionText = radio.closest('.item_in').querySelector('.title_str')?.innerText;
                if (targetText[questionText] && radio.value === targetText[questionText]) {
                    radio.click();
                }
            });
            // 滚动到底部
            window.scrollTo(0, document.body.scrollHeight);
            // 填写评论
            const textareaElement = doc.querySelector('textarea');
            if (textareaElement && textareaElement.value === "") {
                textareaElement.value = "非常喜欢这门课！";
                textareaElement.dispatchEvent(new InputEvent("input"));
            }
            
            // 并自动点击提交
            setTimeout(function () {
                const submitButton = doc.querySelector('button.el-button--primary');
                if (submitButton) {
                    console.log("Submitting evaluation...");
                    submitButton.click();
                }
            }, 300);
        });

    }, 2000);
})(window, document);
