import React, { useState } from 'react';

interface ClipboardHelperProps {
    code: string;
    onCodeChange: (code: string) => void;
}

export function ClipboardHelper({ code, onCodeChange }: ClipboardHelperProps) {
    const [isVisible, setIsVisible] = useState(false);

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(code);
            alert('코드가 클립보드에 복사되었습니다!');
        } catch (err) {
            console.error('복사 실패:', err);
            // 폴백: textarea를 이용한 복사
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('코드가 복사되었습니다!');
        }
    };

    const handlePasteCode = async () => {
        try {
            const text = await navigator.clipboard.readText();
            onCodeChange(text);
            alert('클립보드 내용이 붙여넣어졌습니다!');
        } catch (err) {
            console.error('붙여넣기 실패:', err);
            setIsVisible(true);
        }
    };

    const handleManualPaste = () => {
        const text = prompt('붙여넣을 코드를 입력하세요:');
        if (text) {
            onCodeChange(text);
        }
        setIsVisible(false);
    };

    return (
        <div className="flex space-x-2 mb-2">
            <button
                onClick={handleCopyCode}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                title="현재 코드 복사"
            >
                📋 복사
            </button>
            <button
                onClick={handlePasteCode}
                className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
                title="클립보드에서 붙여넣기"
            >
                📥 붙여넣기
            </button>

            {isVisible && (
                <button
                    onClick={handleManualPaste}
                    className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded hover:bg-orange-200"
                >
                    ✏️ 수동 입력
                </button>
            )}
        </div>
    );
}