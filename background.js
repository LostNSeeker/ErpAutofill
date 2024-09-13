chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const otpField = document.getElementById('otpField');
      if (otpField) {
        chrome.runtime.sendMessage({ action: 'enterOtp' });
      }
    }
  });
  