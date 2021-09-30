// const { appendFile } = require('fs');
// const { join } = require('path');
// const logFile = join(__dirname, 'activity.log');

// const write = (log = null) => {
//   if (log) {
//     appendFile(logFile, `${new Date()} : ${log}\n`, (error) => {
//       if (error) {
//         return console.log('There was an error writing to the log file!');
//       }
//     });
//   }
// };

// module.exports = {
//   write,
// };

const { appendFile } = require('fs');
const { join } = require('path');
const file = join(__dirname, 'activity.log');

const callback = (error) => {
  if (error) {
    console.log('Failed to log content', error);
  }
};

function write(content) {
  if (content) {
    appendFile(file, `${new Date()}: ${content}\n`, callback);
  }
}

module.exports = { write };
