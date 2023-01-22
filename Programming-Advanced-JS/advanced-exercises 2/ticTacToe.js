function solve(array){
    let first = 0;
    let second = 0;
    let isDone = false;
    let dont = false;
    let start = [[false, false, false],

                [false, false, false],
    
                [false, false, false]];
                
    for (let i = 0; i< array.length; i++){
        if (isDone){
            return;
        }
        let command = array[i].split(' ');
        first = Number(command[0]);
        second = Number(command[1]);
        if (start[first][second]){
            console.log('This place is already taken. Please choose another!');
            array.splice(i,1);
            i--;
            dont = true;
        } 

        if (i % 2 == 0 && dont == false){
            start[first][second] = 'X';
        }
        else if (i % 2 == 1 && dont == false){
            start[first][second] = 'O';
        }

        if (start [0][0] == 'X' && start [0][1] == 'X' && start [0][2] == 'X'){         // 1 row
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [1][0] == 'X' && start [1][1] == 'X' && start [1][2] == 'X'){    // 2 row
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [2][0] == 'X' && start [2][1] == 'X' && start [2][2] == 'X'){    // 3 row
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [0][0] == 'X' && start [1][0] == 'X' && start [2][0] == 'X'){    // 1 column
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [0][1] == 'X' && start [1][1] == 'X' && start [2][1] == 'X'){    // 2 column
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [0][2] == 'X' && start [1][2] == 'X' && start [2][2] == 'X'){    // 3 column
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [0][0] == 'X' && start [1][1] == 'X' && start [2][2] == 'X'){    // main diagonal
            console.log("Player X wins!");
            isDone = true;
        }
        else if (start [0][2] == 'X' && start [1][1] == 'X' && start [2][0] == 'X'){    // secondary diagonal
            console.log("Player X wins!");
            isDone = true;
        }

        if (start [0][0] == 'O' && start [0][1] == 'O' && start [0][2] == 'O'){         // 1 row
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [1][0] == 'O' && start [1][1] == 'O' && start [1][2] == 'O'){    // 2 row
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [2][0] == 'O' && start [2][1] == 'O' && start [2][2] == 'O'){    // 3 row
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [0][0] == 'O' && start [1][0] == 'O' && start [2][0] == 'O'){    // 1 column
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [0][1] == 'O' && start [1][1] == 'O' && start [2][1] == 'O'){    // 2 column
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [0][2] == 'O' && start [1][2] == 'O' && start [2][2] == 'O'){    // 3 column
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [0][0] == 'O' && start [1][1] == 'O' && start [2][2] == 'O'){    // main diagonal
            console.log("Player O wins!");
            isDone = true;
        }
        else if (start [0][2] == 'O' && start [1][1] == 'O' && start [2][0] == 'O'){    // secondary diagonal
            console.log("Player O wins!");
            isDone = true;
        }

        if (!start[0].includes(false) && !start[1].includes(false) && !start[2].includes(false)){
            console.log('The game ended! Nobody wins :(');
            isDone = true;
        }
        if (isDone){
            console.log(start[0].join('\t'));
            console.log(start[1].join('\t'));
            console.log(start[2].join('\t'));
        }
        dont = false;
    }            

}   

solve (["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"])