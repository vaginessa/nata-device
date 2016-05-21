import Device from '../'
import assert from 'assert'

describe('testing device api', () => {
  const deviceId = 'DU2SSE1478031311'
  let device

  before(() => {
    device = new Device(deviceId)
  })

  // beforeEach(() => {
  //   device.sleep(2000)
  // })

  it('should get focused pkgact', async done => {
    const pkgact = await device.getFocusedPackageAndActivity()
    console.log(pkgact)
    done()
  })

  it('should clear App Data', async done => {
    const pkg = 'com.cvicse.zhnt'
    await device.clearAppData(pkg)
    done()
  })

  it('should startActivity', async function(done) {
    const pkg = 'com.cvicse.zhnt'
    const act = '.LoadingActivity'
    const componet = `${pkg}/${act}`

    await device.startActivity(componet)
    const output = await device.getCurrentPackageName()
    assert.equal(output, pkg)
    done()
  })

  it('should click (x,y)', async done => {
    const x = 100
    const y = 100
    await device.click(x, y)
    done()
  })
})