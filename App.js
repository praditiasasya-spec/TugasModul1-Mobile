import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Inisialisasi State untuk Tugas 1 dan 2
    this.state = {
      // State Tugas 1
      isTextVisible: false,
      // State Tugas 2
      textInput: '',
      submittedText: '',
    };
  }

  // Method Tugas 1: Toggle tampilan teks Hello World
  toggleText = () => {
    this.setState((prevState) => ({
      isTextVisible: !prevState.isTextVisible,
    }));
  };

  // Method Tugas 2: Menampilkan teks dari input saat tombol diklik
  handleSubmit = () => {
    this.setState({
      submittedText: this.state.textInput,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* ================= TUGAS MANDIRI 1 ================= */}
        <View style={styles.section}>
          <Text style={styles.header}>Tugas 1: Toggle Text</Text>
          <Button
            title={this.state.isTextVisible ? 'Sembunyikan' : 'Tampilkan'}
            onPress={this.toggleText}
          />
          {this.state.isTextVisible && (
            <Text style={styles.result}>Hello World</Text>
          )}
        </View>

        <View style={styles.divider} />

        {/* ================= TUGAS MANDIRI 2 ================= */}
        <View style={styles.section}>
          <Text style={styles.header}>Tugas 2: Input & Submit</Text>
          <TextInput
            style={styles.input}
            placeholder="Ketik sesuatu di sini..."
            onChangeText={(text) => this.setState({ textInput: text })}
            value={this.state.textInput}
          />
          <Button title="Submit" onPress={this.handleSubmit} />
          {this.state.submittedText !== '' && (
            <Text style={styles.result}>
              Hasil: {this.state.submittedText}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
  },
  divider: {
    marginVertical: 20,
  },
});