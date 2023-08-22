from rest_framework import serializers
from .models import Singer, Music, Playlist


class SingerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Singer
        fields = ["id", "name"]


class MusicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Music
        fields = ["id", "name", "recorded_at", "length_in_seconds", "singer"]


class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Playlist
        fields = ["id", "name", "is_active", "created_at", "updated_at", "musics"]
