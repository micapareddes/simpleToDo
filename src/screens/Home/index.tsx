import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

interface TaskProps {
    name: string,
    id: string,
}

export function Home() {
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState<TaskProps[]>([])

    function handleAddTask() {
        if (input !== '') {
            console.log('Task Adicionada!')
            const creationTime = new Date().getTime().toString()
            setTasks(state => [...state, {name: input, id: creationTime} ])
            setInput('')
        }
        
    }

    function handleRemoveTask( id: string ) {
        Alert.alert('Você irá remover esta tarefa', 'Esta ação não pode ser desfeita.', [
            {
                text: 'Remover',
                onPress: () => {
                    console.log('Task Removida!')
                    setTasks(state => state.filter(task => task.id !== id))
                } 
            },
            {
                text: 'Cancelar'
            }
        ])
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tarefas</Text>
            <Text style={styles.subtitle}>Adicione uma nova tarefa</Text>

            <View style={styles.buttonContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome da Tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setInput}
                    value={input}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={handleAddTask}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Task name={item.name} onRemove={() => handleRemoveTask(item.id)}/>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>
                        Nenhuma tarefa foi adicionada ainda.
                    </Text>
                )}
            />

        </View>
    )
}