document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Retrieve values from form fields
    const rollNo = document.getElementById('rollNo').value;
    const password = document.getElementById('password').value;
    const question1 = document.getElementById('question1').value;
    const answer1 = document.getElementById('answer1').value;
    const question2 = document.getElementById('question2').value;
    const answer2 = document.getElementById('answer2').value;
    const question3 = document.getElementById('question3').value;
    const answer3 = document.getElementById('answer3').value;
  
    // Debugging: Check if the values are being captured
    console.log("Roll No:", rollNo);
    console.log("Password:", password);
    console.log("Question 1:", question1, "Answer 1:", answer1);
    console.log("Question 2:", question2, "Answer 2:", answer2);
    console.log("Question 3:", question3, "Answer 3:", answer3);
  
    // Check if required fields are filled
    if (!rollNo || !password || !question1 || !answer1) {
      alert("Please fill in the required fields.");
      return;
    }
  
    // Save the data to Chrome storage
    chrome.storage.sync.set({
      rollNo: rollNo,
      password: password,
      questions: [
        { question: question1, answer: answer1 },
        { question: question2, answer: answer2 },
        { question: question3, answer: answer3 }
      ]
    }, function() {
      alert('Login details saved successfully!');
      console.log("Data saved to Chrome storage.");
    });
  });
  