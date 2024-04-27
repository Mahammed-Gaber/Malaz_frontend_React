import Card from './Card';

function List() {

    // const arr = [{ name: "ali", age: 22, color: 'red' }, { name: "negm", age: 22, color: 'green' }, { name: "ahmed", age: 21, color: 'blue' }];
    return (
        <div>
            {arr.map(function (item, index) { return <Card key={index} data={item} /> })}
        </div>
    )
}

export default List