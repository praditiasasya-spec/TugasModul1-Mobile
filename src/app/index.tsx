import { useState } from 'react';
import { Dimensions, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Daftar 10 gambar galeri
const galleryData = [
  { id: '1', url: 'https://picsum.photos/id/10/400/400', title: 'Pemandangan 1' },
  { id: '2', url: 'https://picsum.photos/id/20/400/400', title: 'Pemandangan 2' },
  { id: '3', url: 'https://picsum.photos/id/30/400/400', title: 'Pemandangan 3' },
  { id: '4', url: 'https://picsum.photos/id/40/400/400', title: 'Pemandangan 4' },
  { id: '5', url: 'https://picsum.photos/id/50/400/400', title: 'Pemandangan 5' },
  { id: '6', url: 'https://picsum.photos/id/60/400/400', title: 'Pemandangan 6' },
  { id: '7', url: 'https://picsum.photos/id/70/400/400', title: 'Pemandangan 7' },
  { id: '8', url: 'https://picsum.photos/id/80/400/400', title: 'Pemandangan 8' },
  { id: '9', url: 'https://picsum.photos/id/90/400/400', title: 'Pemandangan 9' },
  { id: '10', url: 'https://picsum.photos/id/100/400/400', title: 'Pemandangan 10' },
];

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 2 - 16; // Format grid 2 kolom

export default function GalleryScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Galeri Foto Primakara</Text>

      <FlatList
        data={galleryData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedImage(item.url)}>
            <Image source={{ uri: item.url }} style={styles.imageItem} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal untuk memperbesar gambar saat diklik */}
      <Modal visible={selectedImage !== null} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setSelectedImage(null)}
          >
            <Text style={styles.closeText}>✕ Tutup</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.fullImage} resizeMode="contain" />
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  imageItem: {
    width: imageSize,
    height: imageSize,
    margin: 8,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    zIndex: 10,
  },
  closeText: {
    fontWeight: 'bold',
    color: '#000',
  },
});