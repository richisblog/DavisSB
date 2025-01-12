/**
 * 上传文件模块：仅接受 HTML、TXT 和 ICS 文件
 * @param {string} fileInputId - 文件上传控件的 ID
 * @param {function} callback - 成功上传后的回调函数，传入文件内容
 */
export function handleFileUpload(fileInputId, callback) {
    const fileInput = document.getElementById(fileInputId);

    fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('未选择文件！');
            return;
        }

        // 检查文件类型
        const allowedTypes = ['text/html', 'text/plain', 'text/calendar'];
        if (!allowedTypes.includes(file.type)) {
            alert('仅支持 HTML、TXT 或 ICS 文件！');
            fileInput.value = ''; // 清空文件输入框
            return;
        }
        
        // 检查文件大小（可选）
        if (file.size > 5 * 1024 * 1024) { // 限制文件大小为 5MB
            alert('文件过大，大小不能超过 5MB！');
            fileInput.value = '';
            return;
        }

        // 读取文件内容
        try {
            const fileContent = await file.text();
            alert('文件上传成功！');
            callback(fileContent);
        } catch (error) {
            console.error('文件读取失败:', error);
            alert('文件读取失败，请重试！');
        }
    });
}
