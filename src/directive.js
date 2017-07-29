export const imgUploadObj = {
    update(val) {
        this.el.id = val
        console.log('bind id', this.el.id)
    }
}

export const imgUploadPer = {
    update(val) {
        let domStyle = this.el.style
        domStyle.width = val + 'px'
        domStyle.backgroundColor = `#0${val*2.55}0px`
    }
}

export const style = {
    update(val) {
        let domStyle = this.el.style
        for (let key in val) {
            domStyle[key] = val[key]
        }
    }
}
