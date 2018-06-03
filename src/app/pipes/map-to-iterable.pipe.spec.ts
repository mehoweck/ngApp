import { MapToIterablePipe } from './map-to-iterable.pipe';

describe('MapToIterablePipe', () => {
  it('create an instance', () => {
    const pipe = new MapToIterablePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an array', () => {
    const pipe = new MapToIterablePipe();
    const result = pipe.transform({id: 1});
    console.log(result);
    expect(result).toEqual(['id']);
  });
});
