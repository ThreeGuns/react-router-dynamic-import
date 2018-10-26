const nodegit = require('nodegit');
const path = require("path");

const Status = nodegit.Status;
const StatusFile = nodegit.StatusFile;

console.log();

nodegit.Repository.open(path.resolve('../../../.git')).then((rep) => {
    rep.getStatus({
        // version: 1,
        // show: 0,
        flags: 17,
        //pathspec: ['src/test/ack/test.js']
    }).then((changeList) => {
        changeList.forEach(oneChange => {
            console.log(oneChange.path());
        });
    });
    const statuses = [];
    const opts = {
        flags: Status.OPT.INCLUDE_UNTRACKED | Status.OPT.RECURSE_UNTRACKED_DIRS
    };
    Status.foreachExt(rep, opts, (path, status) => {
        console.log(`--> ${path}`);
        statuses.push(new StatusFile({ path: path, status: status }));
    });
}).catch(e => {
    console.error(e);
});