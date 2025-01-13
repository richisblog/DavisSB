import { handleFileUpload } from './fileUpload.js';

// 初始化文件上传模块
handleFileUpload('fileInput', (fileContent) => {
    console.log('文件内容:', fileContent);
    document.getElementById('uploadStatus').textContent = '文件已成功上传！';
});
