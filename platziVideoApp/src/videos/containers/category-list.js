import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Empty from "../components/empty"
import HorizontalSeparator from "../../sections/components/horizontal-separator"
import Layout from "../components/category-list-layout";
import Category from "../components/category";
class CategoryList extends Component {
    renderEmpty = () => <Empty text="No hay ninguna sugerencias. :(" />;
    itemSeparator = () => <HorizontalSeparator  />;
    renderItem = ({item}) => {return (<Category  {...item} />)}
    keyExtractor=({item})=>{
        console.log(item)
        return (item?item.id.toString():"-1")};
    _keyExtractor = (item, index) => item?item.id.toString():index;
    render() {
        return (
            <Layout title="Categorias.">
                <FlatList horizontal={true} keyExtractor={this._keyExtractor} ItemSeparatorComponent={this.itemSeparator} 
                ListEmptyComponent={this.renderEmpty} data={this.props.list} renderItem={this.renderItem} />
            </Layout>
        )
    }
}
export default CategoryList;