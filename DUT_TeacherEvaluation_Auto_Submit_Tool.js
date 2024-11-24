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

(function(global, doc) {
    'use strict';

    setTimeout(function() {

        if (window.location.hash.startsWith('#/tSurvey/')) {

        const evaluationBtn = doc.createElement('button');
        const containerDiv = doc.querySelector('div[class="main-container"]');
        evaluationBtn.style.cssText = "background-color: #4CAF50; color: #ffffff; font-size: 16px; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;";

        evaluationBtn.addEventListener('mouseenter', function() {
            evaluationBtn.style.backgroundColor = "#45a049";
            evaluationBtn.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        evaluationBtn.addEventListener('mouseleave', function() {
            evaluationBtn.style.backgroundColor = "#4CAF50";
            evaluationBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });

        evaluationBtn.innerHTML = '<span data-id="1" style="font-weight: bold;">点我评教</span>';
        containerDiv.appendChild(evaluationBtn);

        // 自动选择选项并提交
        const evaluateElement = doc.querySelector('span[data-id="1"]');
        evaluateElement.parentNode.addEventListener('click', function() {
            const radioButtons = doc.querySelectorAll('input[type="radio"]');
            const targetText = {
                "教师对学生是否存在过于严厉、对考核要求过于严格的现象？": "否",
                "您会向学弟学妹推荐该老师的课程吗？": "是",
                "教师讲解（理论课）": "老师讲解问题非常清晰透彻，重点非常突出。",
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

            radioButtons.forEach(function(radio) {
                const questionText = radio.closest('.item_in').querySelector('.title_str').innerText;
                if (targetText[questionText] && radio.value === targetText[questionText]) {
                    radio.click();
                }
            });

            // 填写评论
            const textareaElement = doc.querySelector('textarea');
            const feedbackOptions = ['非常喜欢这门课！'];
            if (textareaElement.value === "") {
                textareaElement.value = feedbackOptions[0];
                textareaElement.dispatchEvent(new InputEvent("input"));
            }

            // 滚动到底部并自动点击提交
            window.scrollTo(0, doc.body.scrollHeight);
            setTimeout(function() {
                const submitButton = doc.querySelector('button.el-button--primary');
                if (submitButton) {
                    submitButton.click();
                }
            }, 250);
        });
       }
    }, 2000);
})(window, document);
