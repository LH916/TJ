const path = require('path')
const childProcess = require('child_process')

const getVersions = process.versions.node.split('.')[0]
const params = process.argv[2]

if (params === 'build') {
    if (+getVersions >= 17) {
        executeFunc('npm run build17')
    } else {
        executeFunc('npm run build14')
    }
} else {
    // serve

    if (+getVersions >= 17) {
        // 构建脚本，执行run serve, run build

        executeFunc('npm run serve17')
    } else {
        executeFunc('npm run serve14')
    }
}

function executeFunc(command) {
    const workerProcess = childProcess.exec(
        command,
        {
            maxBuffer: 1024 * 1024 * 1024 * 10,
            env: process.env,
            stdio: ['inherit', 'pipe', 'pipe'],
            encoding: 'utf-8'
        },
        (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                console.warn(new Date(), ' 执行失败')
            } else {
                console.log(stdout)
                console.warn(new Date(), ' 执行成功')
            }
        }
    )
    workerProcess.stdout.on('data', function (data) {
        console.log(data)
    })

    workerProcess.stderr.on('data', function (data) {
        console.log(data)
    })
}
