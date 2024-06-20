class f{
    pub="this is public";
    #pro; // private

    set #fill(m){
        this.#pro=m;
    }

    get #fill(){
        return `${this.#pro}`;
    }

    log(m){
        this.#fill=m;
        console.log(this.#fill);
    }
}
const obj=new f();
obj.log("Hello");
