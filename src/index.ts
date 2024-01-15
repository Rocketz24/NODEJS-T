type Handle =() =>Promise<string>
const fullname ="Du thanh duoc"
const handle :Handle=() =>Promise.resolve(fullname)
handle().then(console.log)