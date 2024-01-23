function addTask(){
    let taskName = document.getElementById("task-input").value;
    let taskDate = document.getElementById("date-input").value;
    let taskReward = document.getElementById("reward-input").value;

    var newTask = document.createElement("div");
    newTask.className = 'col-md-4 mb-4';
    newTask.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${taskName}</h5>
            <p class="card-text">${taskDate}</p>
            <p class="card-text">${taskReward}</p>
            <a href="#" class="btn btn-primary">Completed</a>
        </div>
    </div>
    `;

    document.getElementById("task-cards").appendChild(newTask);
    document.getElementById("task-form").reset();
}