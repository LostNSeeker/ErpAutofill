window.onload = function() {
    console.log("Content script running!");
  
    // Retrieve saved user data from storage
    chrome.storage.sync.get(['rollNo', 'password', 'questions'], function(items) {
      if (items.rollNo && items.password && items.questions) {
  
        // Fill in the roll number (user ID) and password fields
        let rollNoField = document.getElementById('user_id');
        let passwordField = document.getElementById('password');
        if (rollNoField) rollNoField.value = items.rollNo;
        if (passwordField) passwordField.value = items.password;
  
        // Simulate password entry and wait for the favorite question to appear
        const waitForQuestionToAppear = setInterval(() => {
          let displayedQuestionElement = document.getElementById('question');
          
          if (displayedQuestionElement && displayedQuestionElement.innerText.trim() !== "") {
            // The question is now displayed
            let displayedQuestion = displayedQuestionElement.innerText.trim().toLowerCase();
            console.log("Displayed question:", displayedQuestion);
  
            // Find the matching question in the stored data
            let matchedQuestion = items.questions.find(q => displayedQuestion.includes(q.question.trim().toLowerCase()));
  
            if (matchedQuestion) {
              let answerField = document.getElementById('answer');
              if (answerField) {
                answerField.value = matchedQuestion.answer;
                console.log("Auto-filled answer for the question:", matchedQuestion.question);
              } else {
                console.error("Answer field not found.");
              }
            } else {
              console.error("No matching question found in stored data.");
            }
  
            clearInterval(waitForQuestionToAppear); // Stop checking once the question has been filled
          }
        }, 500); // Check every 500ms until the question appears
      } else {
        console.error("Stored user data is missing or incomplete.");
      }
    });
  };
  