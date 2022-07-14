import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Context from "../Context/context";

export default class TasksList extends Component {
  static contextType = Context;
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de pesquisa</Text>
        <FlatList
          data={this.context.tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.rowcontainer}>
                <Text style={styles.texto}>{item}</Text>
                <Text
                  style={styles.delete}
                  onPress={() => {
                    this.context.delete(index);
                  }}
                >
                  Excluir
                </Text>
              </View>
            );
          }}

          renderItemEdit={({ item, index }) => {
            return (
              <View style={styles.rowcontainer}>
                <Text style={styles.texto}>{item}</Text>
                <Text
                  style={styles.edit}
                  onPress={() => {
                    this.context.edit(index);
                  }}
                >
                  Editar
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  titulo: {
    marginTop: 20,
    textAlign: "center",
    marginLeft: 20,
    fontSize: 30,
  },
  texto: {
    padding: 10,
    fontSize: 20,
  },
  delete: {
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 15,
  },
  edit: {
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 15,
  },
});
